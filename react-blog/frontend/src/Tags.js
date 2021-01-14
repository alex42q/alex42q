import React from 'react'
import "./Tags.css"

function Tags() {
    return (
        <div className="tags">
            <div className="tagsRowHeader">
                <div className="tagsColumnHeader">
                    <div className="tagsHeader">
                        <h3 className="tagsH3">Tags</h3>
                    </div>
                    <div className="tagsTags">
                        <div className="tagsTagsRow">
                            <div className="tagsTagsColumn">
                                <h5 className="tagsH5">Fashsio</h5>
                                <h5 className="tagsH5">New York</h5>
                                <h5 className="tagsH5">Greece</h5>
                                <h5 className="tagsH5">Hats</h5>
                                <h5 className="tagsH5">Winter</h5>
                            </div>
                        </div>
                        <div className="tagsTagsRow">
                            <div className="tagsTagsColumn">
                                <h5 className="tagsH5">Alex</h5>
                                <h5 className="tagsH5">Kiraki</h5>
                                <h5 className="tagsH5">France</h5>
                                <h5 className="tagsH5">Shoes</h5>
                                <h5 className="tagsH5">Summer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tags
