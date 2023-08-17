package com.springboot.godwebsite.controller;

import com.springboot.godwebsite.entity.Board;
import com.springboot.godwebsite.entity.Comment;
import com.springboot.godwebsite.repository.BoardRepository;
import com.springboot.godwebsite.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@RestController
@RequestMapping("/api")
@Api(description = "게시판 API 관련 기능")
public class BoardApiController {

    @Autowired
    private BoardRepository repository;

    @Autowired
    private CommentRepository commentRepository;

    // Aggregate root

    @GetMapping("/boards")
    @ApiOperation(value = "게시판 목록 조회")
    public List<Board> all(@RequestParam(required = false, defaultValue = "") String title,
                           @RequestParam(required = false, defaultValue = "") String content) {
        if (StringUtils.isEmpty(title) && StringUtils.isEmpty(content)) {
            return repository.findAll();
        } else {
            return repository.findByTitleOrContent(title, content);
        }
    }

    @PostMapping("/boards")
    @ApiOperation(value = "새 게시판 항목 생성")
    public Board newBoard(@RequestBody Board newBoard) {
        return repository.save(newBoard);
    }

    // Single item

    @GetMapping("/boards/{id}")
    @ApiOperation(value = "특정 게시판 항목 조회")
    public Board one(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/boards/{id}")
    @ApiOperation(value = "게시판 항목 수정")
    public Board replaceBoard(@RequestBody Board newBoard, @PathVariable Long id) {
        return repository.findById(id)
                .map(board -> {
                    board.setTitle(newBoard.getTitle());
                    board.setContent(newBoard.getContent());
                    return repository.save(board);
                })
                .orElseGet(() -> {
                    newBoard.setId(id);
                    return repository.save(newBoard);
                });
    }

    @DeleteMapping("/boards/{id}")
    @ApiOperation(value = "게시판 항목 삭제")
    public void deleteBoard(@PathVariable Long id) {
        repository.deleteById(id);
    }


    @GetMapping("/boards/{boardId}/comments")
    public List<Comment> getComments(@PathVariable Long boardId) {
        return commentRepository.findByBoardId(boardId);
    }

    @PostMapping("/boards/{boardId}/comments")
    public Comment addComment(@PathVariable Long boardId, @RequestBody Comment comment) {
        Board board = repository.findById(boardId).orElse(null);
        if (board != null) {
            comment.setBoard(board);
            return commentRepository.save(comment);
        }
        return null;
    }

    @PostMapping("/boards/{id}/like")
    @ApiOperation(value = "게시글 좋아요!")
    public String like(@PathVariable Long id) {
        Board board = repository.findById(id).orElse(null);
        if (board != null) {
            board.setLikesCount(board.getLikesCount() + 1);
            repository.save(board);
        }
        return "redirect:/board/" + id;
    }

    @PostMapping("/boards/{id}/dislike")
    @ApiOperation(value = "게시글 싫어요!")
    public String dislike(@PathVariable Long id) {
        Board board = repository.findById(id).orElse(null);
        if (board != null) {
            board.setDislikesCount(board.getDislikesCount() + 1);
            repository.save(board);
        }
        return "redirect:/board/" + id;
    }


}
