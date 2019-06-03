import React from 'react'

class Welcome extends React.Component {
    render() {
        const todoList = ['1', '2', '3'];
        const test = <h1> Hello, Oliver.Lin</h1 >;

        console.log(test);
        const isLogin = true;
        return (
            <div>
                < h1 > Hello, Oliver.Lin</h1 >
                {<p>this is new</p>}
                <ul>
                    {
                        todoList.map(item => <li>{item}</li>)             
                    }
                </ul>
                {isLogin ? <p>true</p> : <p>false</p>}
            </div>
            )       
}
}

export default Welcome