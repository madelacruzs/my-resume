import React from "react";

const Education = (props) => {
    return (
        <div className="Education">
            <div className="Education-container">
                {props.data.map((education, index) => (
                    <div className="Education-item" key={`Edu-${index}`}>
                        <h3>
                            {education.degree} {education.institution}
                            <span>
                                {education.startDate} - {education.endDate}
                            </span>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
