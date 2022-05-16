import React from 'react';
import useSWR from "swr";

import {NavBar} from "./navbar";

export async function profileFetch(path) {
    const response = await fetch(process.env.BACKEND_URL + path);
    if (response.status === 200) {
        const payload = await response.json();

        return payload;
    }
    throw new Error();
}
