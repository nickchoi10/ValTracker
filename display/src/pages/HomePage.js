import {Card} from 'react-bootstrap';
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import HenrikDevValorantAPI from 'unofficial-valorant-api';



//API key
//In case of CORS error install CORS plugin from app store in browser
const APIKey = ""
const VAPI = new HenrikDevValorantAPI(APIKey);


// Homepage and Recent Matches are the same site at the moment

const cardTitle = {
    color: "blue",
    fontSize: "90px",
}

const cardTitle2 = {
    color: "cyan",
    fontSize: "90px",
}

export const Homepage = () => {
    //Grabs the data from the form
    const [username, setUsername] = useState('')
    const [tags, setTags] = useState('');
    // const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleAPI = async (e) => {
        e.preventDefault()
        console.warn({username, tags})
        const version = "v1"
        const region = "na"
        const name = `${username}`
        const tag = `${tags}`
        const filter = 'competitive'

        console.warn(`RECEIVED NAME! ${name}`)
        console.warn(`RECEIVED TAG! ${tag}`)

        const fetchUsersData = await VAPI.getAccount({name, tag})
        const fetchUsersMMR = await VAPI.getMMR({version, region, name, tag})
        const fetchMatches = await VAPI.getMatches({region, name, tag, filter})
        console.warn(`RECEIVED API USER FETCH!`, fetchUsersMMR)
        console.warn(`RECEIVED API MATCH FETCH!`, fetchMatches)

        const results = await Promise.all([fetchUsersData, fetchUsersMMR, fetchMatches]);
        console.log(`RECEIVED THE FOLLOWING PROMISE:`, results)
        // dispatch(setAPI(results));
        navigate('/recent_matches')
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleTags = (e) => {
        setTags(e.target.value)
    }

    return(
    <><div>
            <Card className="bg-dark text-white">
                <Card.ImgOverlay>
                    <Card.Title style={cardTitle} className="text-center">Valorant Tracker</Card.Title>
                    <Card.Text className="text-center">
                        Enter Username#0000 to display stats.
                    </Card.Text>
                    <form>
                        <fieldset className="text-center">
                            <input
                                placeholder="Username"
                                value={username}
                                onChange={handleUsername} />
                     
                            <input
                                value={tags}
                                placeholder="#0000"
                                onChange={handleTags} />
                            <button onClick={handleAPI}>Search</button>
                        </fieldset>
                    </form>
                </Card.ImgOverlay>
            </Card>
        </div><div>
                <Card className="bg-dark text-white">
                    <Card.Img style={{ height: 300, }} src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcb5e329fe91bc77b/5ee7d0c700210d383b3d3000/VALORANT_Maps_Article_Split_Banner.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={cardTitle} className="text-center"></Card.Title>
                        <Card.Text className="text-center">
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div><div>
                <Card className="bg-dark text-white">
                    <Card.Img style={{ height: 300, }} src="https://wallpapercave.com/wp/wp9073912.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={cardTitle2} className="text-center"></Card.Title>
                        <Card.Text className="text-center">
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div></>
    );
}