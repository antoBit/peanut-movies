import { useContext, useEffect, useState } from 'react'
import { Context } from '../utils/context'
import { useNavigate } from 'react-router-dom'
import '../scss/add.scss'

export default function Add() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { isUserLoggedIn, add } = useContext(Context)
    const navigate = useNavigate()

    const onChangeTitle = (event) => setTitle(event.target.value)
    const onChangeDescription = (event) => setDescription(event.target.value)

    const onSubmit = async (event) => {
        event.preventDefault()
        add(title, description)
    }

    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/')
        }
    }, [isUserLoggedIn, navigate])

    return (
        <div className="form">
            <h1>Add a movie! 🍿</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Tile:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={onChangeTitle}
                    required
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    rows={5}
                    cols={50}
                    value={description}
                    onChange={onChangeDescription}
                    required
                />
                <input type="submit" value="Add movie" />
            </form>
        </div>
    )
}
