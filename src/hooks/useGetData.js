import { useState, useEffect } from "react";
const API = "https://raw.githubusercontent.com/madelacruzs/my-resume/master/data/me.json";

const useGetData = () => {
	const [myData, setData] = useState([]);

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return myData;
};

export default useGetData;
