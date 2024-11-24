import { useMutation } from "@apollo/client";
import { LOGIN } from "api/mutations";
import { useUserContext } from "contexts/UserContext";
import { useRouter } from "next/router";
import * as Yup from "yup";
import type { IloginFormValues } from "../../types/interfaces";

const useLoginForm = () => {
	const router = useRouter();
	const [login] = useMutation(LOGIN);
	const { updateUser } = useUserContext();

	const formInitialValues = {
		email: "",
		password: "",
	};

	const loginSchema = Yup.object().shape({
		email: Yup.string().required("Email is required").email("Invalid email"),
		password: Yup.string().required("Password is required"),
	});

	const handleSubmit = async (values: IloginFormValues) => {
		const { data } = await login({
			variables: {
				email: values.email,
				password: values.password,
			},
		});

		updateUser({
			name: data.userLogin.user.displayName.trim().split(" ")[0],
			surname: data.userLogin.user.displayName.trim().split(" ")[1],
			jwtToken: data.userLogin.authToken,
			id: data.userLogin.user.id,
			isLogged: true,
		});

		router.push("/");
	};

	return {
		formInitialValues,
		handleSubmit,
		loginSchema,
	};
};

export default useLoginForm;
