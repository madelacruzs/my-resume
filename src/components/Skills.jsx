import React from "react";

const Skills = (props) => {
    return (
        <div className="Skills">
            <div className="Skills-container">
                <div className="Skills-item">
                    <h5>HTML5</h5>
                    <div className="Skills-line">
                        <span>95%</span>
                    </div>
                </div>

                {props.data.map((skillCategory, index) => (
                    <div className="Certificates-item" key={`Cert-${index}`}>
                        <h3>{skillCategory.skillCategoryName}</h3>
                        {skillCategory.skillCategoryValues.map((skill, subIndex) => (
                            <p></p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
