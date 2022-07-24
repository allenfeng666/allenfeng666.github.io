import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javaIcon from "@iconify/icons-logos/java";
import javascriptIcon from "@iconify/icons-logos/javascript";
import awsIcon from "@iconify/icons-logos/aws";
import reactIcon from "@iconify/icons-logos/react";
import springIcon from "@iconify/icons-logos/spring";
import redisIcon from "@iconify/icons-logos/redis";
import nodeIcon from "@iconify/icons-logos/nodejs";
import firebaseIcon from "@iconify/icons-logos/firebase"


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <Icon
                      icon={javaIcon}
                      style={{ fontSize: "450%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                      icon={javascriptIcon}
                      style={{ fontSize: "450%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={springIcon}
                    style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodeIcon}
                    style={{ fontSize: "370%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                      icon={awsIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                      icon={redisIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                      icon={firebaseIcon}
                      style={{ fontSize: "440%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
