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
        <button class={styles.AddTeam} onClick={() => setTeams([...teams(), { name: "New Team", points: 0 }])}>
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
        if (event.currentTarget.value.trim() !== "" && !Number.isNaN(+event.currentTarget.value))
            setTeam({...team(), points: +event.currentTarget.value})
    }

    return <div class={styles.Team}>
        <label for={`team-${index}-name`}>Team Name <button class={styles.RemoveTeam} onClick={remove}>X</button></label>
        <input type="text" name="team-name" placeholder="Team Name" id={`team-${index}-name`} value={team().name} onInput={onNameChange} />
        <label for={`team-${index}-score`}>Team Score</label>
        <input type="text" name="team-score" placeholder="Team Score" id={`team-${index}-score`} value={team().points} onInput={onScoreChange} />
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
    </div>;
}

export default Teams;