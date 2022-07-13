import {
    VerticalTimeline,
    VerticalTimelineElement,
    verticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import School from "@mui/icons-material/School"
import Work from "@mui/icons-material/Work"

const Experience = () => {
    return (
        <>
            <div className="experience">
                <VerticalTimeline lineColor="#3e497a">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2015 - 2019"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<School />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Vignan's Foundation For Science, Technlogy and
                            Research, Vadlamudi, Andhra Pradesh
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle"></h4>
                        <p>Electronics and Communication Engineering</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jan 2020 - Nov 2021"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Assistant Systems Engineer - TCS
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Hyderabad, Telangana
                        </h4>
                        <p>
                            Worked as Application Support Engineer for British
                            Telecom Ireland.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Mar 2022 - present"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Systems Engineer - Infosys
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Hyderabad, Telangana
                        </h4>
                        <p>
                            Working as a React Developer for Sothern California
                            Edison. Delivered major enhancements for the SCE Web
                            Application.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience
