import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/yt-spoti.jpeg";
import projImg2 from "../assets/img/ml.jpg";
import projImg3 from "../assets/img/lstm.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import gameBanner from "../assets/img/game.png"
import rpgBanner from "../assets/img/rpg.jpeg"


export const Projects = () => {

  const personalProjects = [
    {
      title: "YT music to Spotify",
      description: "Python program which converts youtube playlist to spotify using YT & Spotify's API",
      imgUrl: projImg1,
      link: "https://github.com/iamjsk10/YT_Music_to_Spotify/wiki",
      category: 'personal'
    },
    {
      title: "Customer Drawing Classifier",
      description: "GUI implemted program which let's the user to train the model by making custom drawings.",
      imgUrl: projImg2,
      link: "https://github.com/iamjsk10/AI_Custom_Drawing_Classifier/wiki",
      category: 'personal'
    },
    {
      title: "LSTM Generating Music",
      description: "Preprocessed songs and train model to produce music",
      imgUrl: projImg3,
      link: "https://github.com/iamjsk10/Music_Generator/wiki",
      category: 'personal'
    }
  ];
  
  const academicProjects = [
    {
      title: 'RPG Game',
      description: 'Top down RPG game programmed with C++',
      imgUrl: rpgBanner,
      link: 'https://github.com/iamjsk10/Comp345_FinalProject/wiki',
    },
    
  ];

  const gameJamProjects = [
    {
      title: ' Midnight Metro',
      description: 'First Person shooter made with Unity',
      imgUrl: gameBanner,
      link: 'https://oksoft.itch.io/midnight-metro',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Academic</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GameJam</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {personalProjects.map
                          ((project, index) => 
                            (
                            <ProjectCard key={index} {...project} />
                            )
                          )
                      }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      {academicProjects.map
                        ((project, index) => 
                          (
                            <ProjectCard key={index} {...project} />
                          )
                        )
                      }

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {gameJamProjects.map
                        ((project, index) => 
                          (
                            <ProjectCard key={index} {...project} />
                          )
                        )
                      }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}