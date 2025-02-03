import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

// Styles for the floating menu
const MenuWrapper = styled(Box)({
  position: "fixed",
  bottom: 20,
  right: 20,
  zIndex: 1201,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)", // Slightly lifts when hovered
  },
});

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Проверяем наличие токена в localStorage
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <MenuWrapper
          onMouseEnter={() => setIsOpen(true)} // Menu appears on hover
          onMouseLeave={() => setIsOpen(false)} // Menu disappears when mouse leaves
        >
          {/* Personal Notebook button */}
          {isOpen && (
            <>
              <Tooltip title="Personal Notebook">
                <Link to="/note">
                  <IconButton
                    sx={{
                      bgcolor: "#4CAF50",
                      color: "#fff",
                      mb: 2,
                      "&:hover": {
                        bgcolor: "#66bb6a",
                      },
                    }}
                  >
                    <NoteIcon />
                  </IconButton>
                </Link>
              </Tooltip>
            </>
          )}

          {/* Main menu button */}
          <Tooltip title="Menu">
            <IconButton
              sx={{
                bgcolor: "#4CAF50",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#66bb6a",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </MenuWrapper>
      )}
    </>
  );
};

export default FloatingMenu;
