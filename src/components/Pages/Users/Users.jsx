import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./Users.module.css";

function Users(props) {
    let [curPage, setCurPage] = useState(1);
    let pageSize = 10;
    let [pages, setPages] = useState([]);

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/", {
            withCredentials: true,
            headers: {"API-KEY": "5b72ddbe-bcdc-47a8-8127-3a3a1a43f034"},
            params: {page : curPage, pageSize: pageSize}
        })
            .then(response => {
                props.setUsers(response.data.items, response.data.totalCount)
                setPages(updatePages(response.data.totalCount))
            })

    }, []);

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/", {
            withCredentials: true,
            headers: {"API-KEY": "5b72ddbe-bcdc-47a8-8127-3a3a1a43f034"},
            params: {page : curPage, pageSize: pageSize}
        })
            .then(response => {
                props.setUsers(response.data.items, response.data.totalCount)
            })

    }, [curPage]);

    const updatePages = (totalCount = props.totalCount) => {
        let ptr = [];
        for (let i = 0; i < 9; ++i)
            ptr.push(curPage + i);
        ptr.push(Math.ceil(totalCount / pageSize))
        return ptr;
    }

    let mapedPages = pages.map((page, id) => {
        return <span key={id} onClick={() => {
            setCurPage(page)
        }} className={page === curPage ? classes.currenPage : null}>{page}</span>
    })

    let mapedUsers = props.users.map(user => {
        if (user.followed)
            return (
                <div key={user.id}>{user.name}
                    <div onClick={() => {
                        axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + user.id, {
                            withCredentials: true,
                            headers: {"API-KEY": "5b72ddbe-bcdc-47a8-8127-3a3a1a43f034"}
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(user.id)
                                }
                            })
                    }}>unfollow
                    </div>
                </div>)
        else return (
            <div key={user.id}>{user.name}
                <div onClick={() => {
                    axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + user.id, {}, {
                        withCredentials: true,
                        headers: {"API-KEY": "5b72ddbe-bcdc-47a8-8127-3a3a1a43f034"}
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(user.id)
                            }
                        })
                }}>follow
                </div>
            </div>)
    })


    return (
        <div>
            <div>{mapedPages}</div>
            <div>{mapedUsers}</div>
        </div>);
}

export default Users;