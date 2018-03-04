import React from 'react';
import PropTypes from 'prop-types'

const AddingForm = ({ handleSubmit, handleFieldChange, title, author, url }) => {
    return (
        <div>
            <h2>Lisää uusi blogi</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    otsikko:
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleFieldChange}
                    />
                </div>
                <div>
                    omistaja:
                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={handleFieldChange}
                    />
                </div>
                <div>
                    url:
                    <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={handleFieldChange}
                    />
                </div>
                <button type="submit">Lisää blogi</button>
            </form>
        </div>
    )
}

export default AddingForm