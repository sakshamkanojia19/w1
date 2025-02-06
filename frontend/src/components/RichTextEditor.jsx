
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Button, CircularProgress, Box, Typography } from "@mui/material";

const RichTextEditor = ({ user }) => {
  const [textEditorData, setTextEditorData] = useState("");
  const [savedTexts, setSavedTexts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved data from local storage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("savedTexts");
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  const handleSave = async () => {
    if (!textEditorData.trim()) {
      alert("Cannot save empty text.");
      return;
    }
    setLoading(true);
    try {
      const newTextData = {
        id: Date.now(),
        text: textEditorData,
      };

      // Save to local storage
      const updatedSavedTexts = [newTextData, ...savedTexts];
      localStorage.setItem("savedTexts", JSON.stringify(updatedSavedTexts));
      setSavedTexts(updatedSavedTexts);

      alert("Data saved successfully!");

      // Clear editor after saving
      setTextEditorData("");
    } catch (error) {
      console.error("Error saving data:", error.response?.data || error);
      alert("Error saving data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAll = () => {
    // Clear all saved data from local storage and reset state
    localStorage.removeItem("savedTexts");
    setSavedTexts([]);
    alert("All saved texts have been deleted.");
  };

  return (
    <Box>
      {loading && <CircularProgress />}
      <ReactQuill
        value={textEditorData}
        onChange={setTextEditorData}
        theme="snow"
        style={{ height: "200px", marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: 2 }}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </Button>

      {/* Display saved texts */}
      {savedTexts.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Saved Texts:</Typography>
          {savedTexts.map((item) => (
            <Box
              key={item.id}
              sx={{
                border: "1px solid #ccc",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </Box>
          ))}
        </Box>
      )}

      {/* Delete All button */}
      {savedTexts.length > 0 && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDeleteAll}
          sx={{ marginTop: 2 }}
        >
          Delete All
        </Button>
      )}
    </Box>
  );
};

export default RichTextEditor;
