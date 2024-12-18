import axiosClient from "@/apis/config/axiosClient.ts";

const userService = {
	
	login: async (email: string, password: string): Promise<any> => {
		return await axiosClient.post("/auth/login", { email, password });
	},
	
	
	register: async (email: string, password: string): Promise<any> => {
		return await axiosClient.post("/auth/register", { email, password });
	}
}

export default userService;