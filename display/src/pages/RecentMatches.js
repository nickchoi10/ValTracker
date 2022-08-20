import React from 'react';
import {useSelector} from "react-redux";
import './css/recentmatches.css'
import Card from 'react-bootstrap/Card';

const RecentMatches = () => {
    const players = useSelector(state => state.users)
    console.log(players)
    /**
     * When you refresh the site on recent matches page it crashes
     * fix that later
     */


    //Grab PUUID from player data and game stats of PUUID
    const puuid = players[0]?.data?.puuid;
    const game1 = players[2]?.data[0]?.players?.all_players.filter(t=>t.puuid ===puuid);
    const game2 = players[2]?.data[1]?.players?.all_players.filter(t=>t.puuid ===puuid);
    const game3 = players[2]?.data[2]?.players?.all_players.filter(t=>t.puuid ===puuid);
    const game4 = players[2]?.data[3]?.players?.all_players.filter(t=>t.puuid ===puuid);
    const game5 = players[2]?.data[4]?.players?.all_players.filter(t=>t.puuid ===puuid);

    //Stores the agent used by the player between game 1 to 5
    const getAgentPicture1 = game1[0]?.assets?.agent?.small;
    const getAgentPicture2 = game2[0]?.assets?.agent?.small;
    const getAgentPicture3 = game3[0]?.assets?.agent?.small;
    const getAgentPicture4 = game4[0]?.assets?.agent?.small;
    const getAgentPicture5 = game5[0]?.assets?.agent?.small;

    //Stores the map played by the player between game 1 to 5
    const getMap1 = players[2]?.data[0]?.metadata?.map
    const getMap2 = players[2]?.data[1]?.metadata?.map
    const getMap3 = players[2]?.data[2]?.metadata?.map
    const getMap4 = players[2]?.data[3]?.metadata?.map
    const getMap5 = players[2]?.data[4]?.metadata?.map

    //Stores the kills of player betweens game 1 to 5
    const getKills1 = game1[0]?.stats?.kills;
    const getKills2 = game2[0]?.stats?.kills;
    const getKills3 = game3[0]?.stats?.kills;
    const getKills4 = game4[0]?.stats?.kills;
    const getKills5 = game5[0]?.stats?.kills;

    //Stores the deaths of player betweens game 1 to 5
    const getDeaths1 = game1[0]?.stats?.deaths
    const getDeaths2 = game2[0]?.stats?.deaths
    const getDeaths3 = game3[0]?.stats?.deaths
    const getDeaths4 = game4[0]?.stats?.deaths
    const getDeaths5 = game5[0]?.stats?.deaths

    //Stores the assists of player betweens game 1 to 5
    const getAssists1 = game1[0]?.stats?.assists
    const getAssists2 = game2[0]?.stats?.assists
    const getAssists3 = game3[0]?.stats?.assists
    const getAssists4 = game4[0]?.stats?.assists
    const getAssists5 = game5[0]?.stats?.assists


    //Stores the assists of player betweens game 1 to 5
    const getKD1 = Math.round((getKills1/getDeaths1 + Number.EPSILON) * 100) / 100
    const getKD2 = Math.round((getKills2/getDeaths2 + Number.EPSILON) * 100) / 100
    const getKD3 = Math.round((getKills3/getDeaths3 + Number.EPSILON) * 100) / 100
    const getKD4 = Math.round((getKills4/getDeaths4 + Number.EPSILON) * 100) / 100
    const getKD5 = Math.round((getKills5/getDeaths5 + Number.EPSILON) * 100) / 100
    const getKDlast5 = parseFloat(((getKD1 + getKD2 + getKD3 + getKD4 + getKD5 + Number.EPSILON) * 100) / 500).toFixed(2)


    //Stores the date when match started
    const getMatchDate1 = players[2]?.data[0]?.metadata?.game_start_patched
    const getMatchDate2 = players[2]?.data[1]?.metadata?.game_start_patched
    const getMatchDate3 = players[2]?.data[2]?.metadata?.game_start_patched
    const getMatchDate4 = players[2]?.data[3]?.metadata?.game_start_patched
    const getMatchDate5 = players[2]?.data[4]?.metadata?.game_start_patched

    const allGames = [game1, game2, game3, game4, game5]

    return (
        <>
        <Card className='card-container'>
            <Card.Text>
              <div className='text-left'>
              Avarage KD last 5 matches: {getKDlast5}
              </div>
              <div className='text-center'>
                {players[0]?.data?.name}
              </div>
            </Card.Text>
            <div className='text-center'>
            <Card.Img  style={{ width: 150, }} variant="top" src={players[0]?.data?.card['small']} />
            </div>
          <Card.Body className='card-container'>
            <Card.Text className='text-center'>Rank: {players[1]?.data?.currenttierpatched} - {players[1]?.data?.ranking_in_tier} RR
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className='match-container'>
          <Card.Body>
            <Card.Text>
                {getMatchDate1} <hr />
                <img width={60} src={getAgentPicture1} alt="Logo"/> {getMap1}  <br />
                Kills: {getKills1} 	&nbsp;
                Assists: {getAssists1} 	&nbsp;
                Deaths: {getDeaths1} <br />
                KD: {Math.round((getKills1/getDeaths1 + Number.EPSILON) * 100) / 100}
                <hr />
            </Card.Text>
            <Card.Text>
                {getMatchDate2} <hr />
                <img width={60} src={getAgentPicture2} alt="Logo"/> {getMap2}  <br />
                Kills: {getKills2} 	&nbsp;
                Assists: {getAssists2} 	&nbsp;
                Deaths: {getDeaths2} <br />
                KD: {Math.round((getKills2/getDeaths2 + Number.EPSILON) * 100) / 100}
            </Card.Text>
            <Card.Text>
                {getMatchDate3} <hr />
                <img width={60} src={getAgentPicture3} alt="Logo"/> {getMap3}  <br />
                Kills: {getKills3} 	&nbsp;
                Assists: {getAssists3} 	&nbsp;
                Deaths: {getDeaths3} <br />
                KD: {Math.round((getKills3/getDeaths3 + Number.EPSILON) * 100) / 100}
            </Card.Text>
            <Card.Text>
                {getMatchDate4} <hr />
                <img width={60} src={getAgentPicture4} alt="Logo"/> {getMap4}  <br />
                Kills: {getKills4} 	&nbsp;
                Assists: {getAssists4} 	&nbsp;
                Deaths: {getDeaths4} <br />
                KD: {Math.round((getKills4/getDeaths4 + Number.EPSILON) * 100) / 100}
            </Card.Text>
            <Card.Text>
                {getMatchDate5} <hr />
                <img width={60} src={getAgentPicture5} alt="Logo"/> {getMap5}  <br />
                Kills: {getKills5} 	&nbsp;
                Assists: {getAssists5} 	&nbsp;
                Deaths: {getDeaths5} <br />
                KD: {Math.round((getKills5/getDeaths5 + Number.EPSILON) * 100) / 100}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
}

export default RecentMatches