import React, {useState, useEffect} from "react";
import $ from 'jquery';

function Write() {

    //년, 월, 일을 생성해서 넣어줄 곳을 만들어줌
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [day, setDay] = useState([]);
    const [dayEnd, setDayEnd] = useState([]);

    //Date 객체를 생성해서 현재 날짜를 판단할 때에 기준으로 사용
    const now = new Date();
    
    //실질적으로 년월일을 만들어주는 로직임
    //생각했을 때 년 -> 월 -> 일 순으로 정함
    //그래서 년 -> 월 을 정했을 때 일을 동적으로 만들어줌
    const yearList = [];

    const createYear = () => {
        const nowYear = now.getFullYear();
        for(let i = 1980; i <= nowYear; i++){
            yearList.push(`${i}`);
        }
        setYear(yearList);
    }
    const monthList = [];

    const createMonth = () => {
        for(let i = 1; i <= 12; i++){
            if(i < 10)monthList.push(`0${i}`);
            else monthList.push(`${i}`);
        }
        setMonth(monthList);
    }
    const dayList = [];

    const createDay = () => {
        //현재 선택한 년, 월이 언제인지 가져옴
        const selectYear = $('#startYear option:selected').val();
        const selectMonth = $('#startMonth option:selected').val();

        //월에 따라 다르고 윤년인지 판단도 해야하기 때문에
        //이러한 계산을 간단하게 해결해줌
        const day = new Date(selectYear, selectMonth, 0).getDate();

        for(let i = 1; i <= day; i++){
            if(i < 10)dayList.push(`0${i}`);
            else dayList.push(`${i}`);
        }
        setDay(dayList);
    }

    const dayListEnd = [];

    const createDayEnd = () => {
        //현재 선택한 년, 월이 언제인지 가져옴
        const selectYear = $('#endYear option:selected').val();
        const selectMonth = $('#endMonth option:selected').val();

        //월에 따라 다르고 윤년인지 판단도 해야하기 때문에
        //이러한 계산을 간단하게 해결해줌
        const day = new Date(selectYear, selectMonth, 0).getDate();

        for(let i = 1; i <= day; i++){
            if(i < 10)dayList.push(`0${i}`);
            else dayList.push(`${i}`);
        }
        setDayEnd(dayListEnd);
    }

    //년도를 map함수를 이용해서 만들어줌
    //현재 클릭을 할 때마다 생성이 돼서 매우 비효율적
    //언제 함 시간을 내서 수정을 해야할듯 싶음
    const yearender = year.map(v => {
        return(
            <option>{v}</option>
        )
    })

    const monthRender = month.map(v => {
        return(
            <option>{v}</option>
        )
    })

    const dayRender = day.map(v => {
        return(
            <option>{v}</option>
        )
    })

    const dayRenderEnd = dayEnd.map(v => {
        return(
            <option>{v}</option>
        )
    })
    

    return(
        <div id="write-div">
            <input placeholder="Title"></input><br />
            <select id="test">
                <option disabled selected >Part</option>
                <option>FrontEnd</option>
                <option>BackEnd</option>
            </select><br />
            <select id="startYear" onFocus={createYear}>
                <option disabled selected>시작 년도</option>
                {yearender}
            </select>
            <select id="startMonth" onFocus={createMonth}>
                <option disabled selected>시작 월</option>
                {monthRender}
            </select>
            <select onFocus={createDay}>
                <option disabled selected>시작 일</option>
                {dayRender}
            </select><br />
            <select id="endYear" onFocus={createYear}>
                <option disabled selected>종료 년도</option>
                {yearender}
            </select>
            <select id="endMonth" onFocus={createMonth}>
                <option disabled selected>종료 월</option>
                {monthRender}
            </select>
            <select onFocus={createDayEnd}>
                <option disabled selected>종료 일</option>
                {dayRenderEnd}
            </select><br />
            <input placeholder="Stack"></input><br />
            <input placeholder="ImageName"></input><br />
            <textarea placeholder="진행내용 정리"></textarea><br />
            <textarea placeholder="회고"></textarea><br />
            <input placeholder="GitHub Link"></input>
        </div>
    );
}

export default Write;