// go back to entry list
export const handleEscapeKey = (
  activeContent,
  setActiveContent,
  entryListRef,
) => {
  if (!activeContent) {
    return;
  }
  setActiveContent(null);
  if (entryListRef.current) {
    entryListRef.current.setAttribute("tabIndex", "-1");
    entryListRef.current.focus();
  }
};

// go to previous entry
export const handleLeftKey = (currentIndex, entries, handleEntryClick) => {
  if (currentIndex > 0) {
    const prevEntry = entries[currentIndex - 1];
    handleEntryClick(prevEntry);
    const card = document.querySelector(".card-custom-selected-style");
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }
};

// go to next entry
export const handleRightKey = (currentIndex, entries, handleEntryClick) => {
  if (currentIndex < entries.length - 1) {
    const nextEntry = entries[currentIndex + 1];
    handleEntryClick(nextEntry);
    const card = document.querySelector(".card-custom-selected-style");
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

// open link externally
export const handleBKey = (activeContent) => {
  if (activeContent) {
    window.open(activeContent.url, "_blank");
  }
};

// mark as read or unread
export const handleMKey = (activeContent, handleUpdateEntry) => {
  if (activeContent) {
    handleUpdateEntry();
  }
};

// star or unstar
export const handleSKey = (activeContent, handleStarEntry) => {
  if (activeContent) {
    handleStarEntry();
  }
};