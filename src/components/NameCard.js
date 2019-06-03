import React from 'react'

class NameCard extends React.Component {
    render() {
        const { name, number, isHuman, tags } = this.props
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{isHuman ? "人类" : "外星人"}</li>
                    <hr />
                    <p>
                        {tags.map((tag, index) => (
                            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                            ))}
                    </p>
                </ul>
            </div>
        )
    }
}

export default NameCard