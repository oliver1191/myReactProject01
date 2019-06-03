import React from 'react'

class LinksButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }
    increaseLikes() {        
        this.setState({ likes: this.state.likes+1 })
    }
    render() {
        return (
            <div className="likes-button-component">
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={this.increaseLikes.bind(this)}>
                    点赞{this.state.likes}
                </button>                
            </div>
        )
    }
}
export default LinksButton