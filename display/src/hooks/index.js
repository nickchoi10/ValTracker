import HenrikDevValorantAPI from 'unofficial-valorant-api';
import {useDispatch} from "react-redux";
import {setUsers} from "../reducers/playersReducer";

const VAPI = new HenrikDevValorantAPI();