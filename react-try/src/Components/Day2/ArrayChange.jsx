
import React, { useState } from 'react';

const ArrayChange = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState('');
    const [delFriend, setDelFriend] = useState('');

    const handleNewInputChange = (event) => {
        setNewFriend(event.target.value);
    };

    const handleDelInputChange = (event) => {
        setDelFriend(event.target.value);
    };

    const addFriend = () => {
        if (newFriend.trim() !== '') {
            setFriends([...friends, newFriend.trim()]);
            setNewFriend('');
        }
    };

    const removeFriend = () => {
        friends.includes(delFriend)? setFriends(friends.filter((friend) =>  friend !== delFriend)) : console.log("Not found");
        setDelFriend('');
    };
    
    return (
        <div>

            {friends.map((friend, index) => (
                <div key={index}>
                    <h3>{friend}</h3>
                </div>
            ))}

            <input type="text" value={newFriend} onChange={handleNewInputChange} />
            <button onClick={addFriend}>Add Friend</button>

            <input type="text" value={delFriend} onChange={handleDelInputChange} />
            <button onClick={removeFriend}>Remove Friend</button>

        </div>
    );
};

export default ArrayChange;

