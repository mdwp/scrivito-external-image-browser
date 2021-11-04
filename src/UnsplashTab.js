import * as React from "react";
import * as Scrivito from "scrivito";
import Masonry from 'react-masonry-css'

class UnsplashTab extends React.Component {
    constructor(props) {
        super(props);
        this.widget = this.props.widget;
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEntries = this.handleChangeEntries.bind(this);
        this.imageClicked = this.imageClicked.bind(this);
        this.state = {
            imgs: [],
            value: '',
            image: '',
            category: '',
            entries: 1,
        }
    }
    componentDidMount() {
        const keyword = this.widget.get('keyword') || 'business';

        fetch(`https://api.unsplash.com/search/photos/?query=${keyword}&page=1&w=300&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            this.setState({ imgs: data.results });

        })
        .catch(error => console.error(error))

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        const keyword = this.widget.get('keyword') || 'business';
        const category = event.target.value;
        this.setState({ category: category });
        this.setState({ entries: this.state.entries + 1 });
        const entries = this.state.entries;

        fetch(`https://api.unsplash.com/search/photos/?query=${keyword}&page=${entries}&order_by=${category}&w=300&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            this.setState({ imgs: data.results });

        })
        .catch(error => console.error(error))

    };

    handleChangeEntries() {
        const keyword = this.widget.get('keyword') || 'it';
        this.setState({ entries: this.state.entries + 1 });
        const entries = this.state.entries;
        const category = this.state.category;

        fetch(`https://api.unsplash.com/search/photos/?query=${keyword}&page=${entries}&w=300&client_id=Jb7CifoVswbg57yHSgimpPopG0RqEk9oeUTqCnJ758Y`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            this.setState({ imgs: data.results });

        })
        .catch(error => console.error(error))

        
    };

    imageClicked(src, description) {
        const { widget } = this.props;
        widget.update({ image: src })

    };

    render() {
        const images = this.state.imgs;
        {

            return (
                <div>

                    <select onChange={this.handleChange} value={this.state.value}>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Popular</option>
                    </select>

                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">{images.map((el, index) =>
                            <img key={index} src={el.urls.small} onClick={() => this.imageClicked(el.urls.raw + "&w=2000&dpi=2", el.description)} />
                        )}
                    </Masonry>
                    <div className="text-center"><a className="btn btn-primary" onClick={this.handleChangeEntries}>Load more ...</a></div>
                </div>
            );
        };
    }
}



Scrivito.registerComponent("UnsplashTab", UnsplashTab);
