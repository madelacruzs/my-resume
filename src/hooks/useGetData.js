import { useState, useEffect } from "react";
const API = "";

const useGetData = () => {
	const [myData, setData] = useState([]);

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setData(data));
	});

	return myData;
};

//export default useGetData;
