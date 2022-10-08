import React from 'react';
import {MdDeleteForever, MdOutlineEditNote} from 'react-icons/md';


function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdOutlineEditNote onClick={() => onEdit(exercise)}/></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;