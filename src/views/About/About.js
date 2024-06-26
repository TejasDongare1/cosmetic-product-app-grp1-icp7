import "./About.css"
import bg1 from "./bg1.jpg"
import nailPaints from "./about-image-2.jpg"
import fruit from "./fruit.png"
import floral from "./floral.png"
import ocean from "./ocean.png"
import { theme } from "../../configData"
import { cosmetic_sold,happy_client,countries,employee } from "./AboutData"


function About() {
  return (
    <>
        <div>
            <div className="section1">
                <div>
                    <img src={bg1} className="title-bg" alt="background" />
                </div>
                <div className="text-on-image">
                    <h3 style={{color: theme.primaryColor,fontStyle: "italic"}}>Organic Cosmetic</h3>
                    <h1 style={{color: theme.Heading}}>About US</h1>
                </div>
            </div>
            <div className="cosmetic-types-data">
                <div className="cosmetic-types-data-1">
                    <img src={nailPaints} alt="nailpaint" className="cosmetic-types-data-1-img"/>
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}}>NATURAL ORGANIC COSMETICS PROMOTES REJUVENATION</h1>
                        <p style={{color: theme.description}}>Bleak cod cutthroat eel sargassum fish panga sucker beardfish lionfish batfish eulachon Raccoon butterfly fish tetra. Pejerrey combtooth blenny Sundaland Noodlefish pipefish zebra shark beaked salmon hillstream loach New Zealand smelt salmon false moray pelican eel stoneroller minnow.</p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img" alt="fresh type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img" alt="floral type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img" alt="ocean type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3-sub">
                    <h1 style={{color: theme.Heading}}>Our Achievements</h1>
                    <p style={{color: theme.description}} className="section3-description">Black scabbardfish vimba, beaked salmon sandroller, firefish silver driftfish, golden dojo finback cat shark central uhylise</p>
                </div>
                <div className="section3-sub2">
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{cosmetic_sold}</h1>
                        <p style={{color: theme.description}}>COSMETICS SOLD</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{happy_client}</h1>
                        <p style={{color: theme.description}}>HAPPY CLIENTS</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{countries}</h1>
                        <p style={{color: theme.description}}>COUNTRIES</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{employee}</h1>
                        <p style={{color: theme.description}}>EMPLOYEES</p>
                    </div>
                </div>
            </div>
            <div className="section4">
                <iframe width="1000" height="480" src="https://www.youtube-nocookie.com/embed/NbVAgoJUb04?si=D3wTI4mTYFKqSw9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </>
  )
}

export default About