import React, { Component } from 'react';
import './SearchBar.css';

interface IProps {
    search: (searTerm: string) => void;
}

class SearchBar extends Component<IProps> {
    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange={this.search} />
            </form>
        );
    }

    search = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.search(e.target.value);
    }
}

export default SearchBar;
