import * as React from "react";
import * as Scrivito from "scrivito";
import Masonry from 'react-masonry-css'

class EuropeanaTab extends React.Component {
    constructor(props) {
        super(props);
        this.widget = this.props.widget;
        this.handleChange = this.handleChange.bind(this);
        this.imageClicked = this.imageClicked.bind(this);
        this.state = {
            imgs: [],
            value: '',
            image: '',
            more: 1
        }
    }
    componentDidMount() {
        const cat = this.widget.get('keyword');

        fetch(`https://www.europeana.eu/api/v2/search.json?wskey=xEPjKXVci&query=${cat}&start=1&rows=9&reusability=open&type=Image&profile=rich`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            
            this.setState({ imgs: data.items });

        })
        .catch(error => console.error(error))

        
    }
    handleChange() {
        const start = this.state.more + 9;
        const keyword = this.widget.get('keyword');
        this.setState({ more: start });

        fetch(`https://www.europeana.eu/api/v2/search.json?wskey=xEPjKXVci&query=${cat}&start=1&rows=${start}&reusability=open&type=Image&profile=rich`) // first step
            .then(response => response.json()) // second step
            .then(data => {

            this.setState({ imgs: data.items });

        })
        .catch(error => console.error(error))
    };


    imageClicked(src, title, country, provider, description) {

        const { widget } = this.props;
        widget.update({ image: src });

    };

    render() {
        {
            const images = this.state.imgs;
            return (
                <div>

                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">{images.map((el, index) =>
                            <div key={index}>
                                <img src={el.edmPreview[0]} onClick={() => this.imageClicked(
                                    el.edmPreview[0],
                                    el.title[0],
                                    el.country[0],
                                    el.dataProvider[0],
                                    el.dcDescription[0]

                                )} />

                            </div>
                        )}
                    </Masonry>

                    <div className="text-center"><a className="btn btn-primary" onClick={this.handleChange}>Load more ...</a></div>
                </div>
            );
        };
    }
}



Scrivito.registerComponent("EuropeanaTab", EuropeanaTab);
