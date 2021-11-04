import * as React from "react";
import * as Scrivito from "scrivito";
import axios from 'axios';
import Masonry from 'react-masonry-css'

class SmithsoniaTab extends React.Component {
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
        fetch(`https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=${cat}&api_key=dBeMMftap5RHia6vDExdIosDXeLjcU3y3SbMAKau`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            
            this.setState({ imgs: data.response.rows });

        })
        .catch(error => console.error(error))
        
    }
    handleChange() {
        const start = this.state.more + 8;
        const cat = this.widget.get('keyword');
        this.setState({ more: start });

        fetch(`https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=${cat}&start=1&rows=${start}&api_key=dBeMMftap5RHia6vDExdIosDXeLjcU3y3SbMAKau`) // first step
            .then(response => response.json()) // second step
            .then(data => {
            this.setState({ imgs: data.response.rows });

        })
        .catch(error => console.error(error))

        
    };

    imageClicked(src) {
        const { widget } = this.props;
        widget.update({ image: src });

    };


    render() {
        const images = this.state.imgs;
        {

            return (

                <div>
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">{images.map((el, index) =>

                            <div key={index}>

                                {el.content.descriptiveNonRepeating.online_media &&
                                    <img
                                        src={el.content.descriptiveNonRepeating.online_media.media[0].thumbnail}
                                        onClick={() => this.imageClicked(
                                            el.content.descriptiveNonRepeating.online_media.media[0].thumbnail,
                                            el.title,
                                            el.content.freetext.dataSource[0].content,
                                            el.content.indexedStructured.name[0],
                                            el.content.freetext.notes[0].content && el.content.freetext.notes[0].content,
                                        )}
                                    />
                                }

                            </div>
                        )}
                    </Masonry>

                    <div className="text-center"><a className="btn btn-primary" onClick={this.handleChange}>Load more ...</a></div>
                </div >
            );
        };
    }
}



Scrivito.registerComponent("SmithsoniaTab", SmithsoniaTab);
