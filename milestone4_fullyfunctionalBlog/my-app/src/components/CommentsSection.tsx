"use client";

import React, { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment.trim()]);
    setNewComment("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
      <div className="mt-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
