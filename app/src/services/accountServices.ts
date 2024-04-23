import axios from "axios";

const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_UP_PERSONAL_ACCESS_TOKEN}`,
    },
};

export const fetchAccounts = async () => {
    try {
        const response = await axios.get("https://api.up.com.au/api/v1/accounts", config);
        return response.data.data;
    } catch (err) {
        console.error("Failed to fetch accounts. Please try again later.", err);
        throw err;
    }
};

export { }