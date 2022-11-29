import type { Component, Accessor, Signal } from 'solid-js';

import { createSignal, createEffect, For, Index } from 'solid-js';
import { CQ, TeamModel } from './data';

import styles from './Teams.module.css';

const Teams: Component<{
    teamsSignal: Signal<TeamModel[]>,
    currentCQ: Accessor<CQ | undefined>,
    answerShown: Accessor<boolean>,
}> = ({ teamsSignal, currentCQ, answerShown }) => {
    const [teams, setTeams] = teamsSignal;

    return <div class={styles.Teams}>
        <Index each={teams()}>{(team, index) =>
            <Team
                index={index}
                team={team}
                setTeam={team => setTeams([...teams().slice(0, index), team, ...teams().slice(index + 1)])}
                remove={() => setTeams([...teams().slice(0, index), ...teams().slice(index + 1)])}
                qPoints={() => currentCQ()?.question.points}
            />
        }</Index>
        <button class={styles.AddTeam} onClick={() => setTeams([...teams(), { name: "", points: 0 }])}>
            + Add Team
        </button>
    </div>;
}

const Team: Component<{
    index: number,
    team: () => TeamModel,
    setTeam: (v: TeamModel) => void,
    remove: () => void,
    qPoints: Accessor<number | null | undefined>,
}> = ({ index, team, setTeam, remove, qPoints }) => {
    function onNameChange(event: Event & { currentTarget: HTMLInputElement, target: Element }) {
        setTeam({...team(), name: event.currentTarget.value});
    }

    function onScoreChange(event: Event & { currentTarget: HTMLInputElement, target: Element }) {
        const filtered = event.currentTarget.value.trim().replace("$", "");
        if (filtered !== "" && !Number.isNaN(+filtered))
            setTeam({...team(), points: +filtered})
    }

    return <div class={styles.TeamWrapper}>
        <div class={styles.Team}>
            <div class={styles.Score}><input type="text" name="team-score" placeholder="Score" id={`team-${index}-score`} value={"$" + team().points} onInput={onScoreChange} /></div>
            <input type="text" name="team-name" placeholder="Team Name" id={`team-${index}-name`} value={team().name} onInput={onNameChange} />
            <div class={styles.AnswerButtons}>
                <button class={styles.WrongButton} onClick={() => {
                    if (qPoints() == null) return;

                    setTeam({
                        ...team(),
                        points: team().points - qPoints()!,
                    })
                }}>Wrong</button>
                <button class={styles.RightButton} onClick={() => {
                    console.log(qPoints())
                    if (qPoints() == null) return;

                    setTeam({
                        ...team(),
                        points: team().points + qPoints()!,
                    })
                }}>Right</button>
            </div>
        </div>
        <button class={styles.RemoveTeam} onClick={remove}><img src="/src/assets/x.svg" width={20} height={20} title="Delete Team" /></button>
    </div>;
}

export default Teams;