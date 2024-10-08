"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = () => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        } else {
            setNotes([]);
        }
    };

    const addNote = () => {
        // Trim only leading and trailing spaces, not spaces between lines
        const trimmedNote = newNote.trim();
        if (trimmedNote) {
            const newNotes = [...notes, { id: Date.now(), note: newNote }];
            localStorage.setItem('notes', JSON.stringify(newNotes));
            setNotes(newNotes);
            setNewNote('');
        }
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        setNotes(newNotes);
    };

    return (
        <div className="App">
            <div className="main-content">
                <h1>Memo Vault</h1>
                <div className="input-container">
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Write your note here..."
                    />
                    <button className='AddNote' onClick={addNote}>Add Note</button>
                </div>
                <div className="notes-container">
                    {notes.length === 0 ? (
                        <p>Wow, so empty! :D</p>
                    ) : (
                        notes.map((note) => (
                            <div key={note.id} className="note">
                                <p>{note.note}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <footer className="footer">
                <p>Made by <a href="https://github.com/nitin-is-me" target="_blank" >Nitin</a></p>
            </footer>
        </div>
    );
}
