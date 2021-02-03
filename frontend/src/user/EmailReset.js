import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import { updateEmail } from "./helper/userapicalls";

const EmailReset = ({ history }) => {
	//React Hooks
	const [emailObject, setEmailObject] = useState({
		newEm1: "",
		newEm2: "",
		oldEm: "",
	});
	const [status, setStatus] = useState({
		loading: false,
		error: "",
		success: false,
	});

	//Destructuring
	const { user, token } = isAuthenticated();
	const { newEm1, newEm2, oldEm } = emailObject;
	const { loading, error, success } = status;

	//Loading Message
	const loadingMessage = () => {
		if (loading) {
			return (
				<div className="alert alert-info m-2 text-info">
					<h4 className="text-info">Loading...</h4>
				</div>
			);
		}
	};

	//Success Message
	const successMessage = () => {
		return (
			<div
				className="alert alert-success m-2 text-success"
				style={{ display: success ? "" : "none" }}
			>
				<h4>{`${success}`}</h4>
			</div>
		);
	};

	//Signup error message popup
	const errorMessage = () => {
		if (error) {
			return (
				<div className="alert alert-danger m-2 text-danger">
					<h4>Email Updation Failed!</h4>
					<p>{JSON.stringify(error)}</p>
				</div>
			);
		}
	};

	const handleChange = (name) => (event) => {
		//Resetting errors
		setStatus({ ...status, error: "", success: false });
		setEmailObject({ ...emailObject, [name]: event.target.value });
	};

	const validation = () => {
		if (newEm1 === newEm2 && newEm1.length>=10) {
			return true;
		} else {
			return false;
		}
	};

	const formSubmit = (event) => {
		event.preventDefault();

		setStatus({ ...status, loading: true });

		//Setting up data for the backendc
		let newEmail = newEm1,
			email = oldEm;

		let formdata = {
			newEmail,
			email,
		};

		updateEmail(user._id, token, formdata)
			.then((data) => {
				if (data.error) {
					setStatus({ ...status, loading: false, error: data.error });
					//Reset States
					setEmailObject({
						newEm1: "",
						newEm2: "",
						oldEm: "",
					});
				} else {
					setStatus({
						...status,
						loading: false,
						success:
							"Email for user " +
							data.name +
							" has been updated successfully",
					});
					//Reset States
					setEmailObject({
						newEm1: "",
						newEm2: "",
						oldEm: "",
					});
					signout(() => {
						setStatus({
							...status,
							loading: "Signed-out: Redirecting to homepage...",
						});
						setTimeout(() => {
							history.push("/");
						}, 3000);
					});
				}
			})
			.catch((err) => {
				setStatus({
					...status,
					loading: false,
					error: `Error communicationg with the backend, ${err}`,
				});
				//Reset States
				setEmailObject({
					newEm1: "",
					newEm2: "",
					oldEm: "",
				});
			});
	};

	const resetEmailForm = () => {
		return (
			<form>
				<h6 className={validation() ? "text-success" : "text-warning"}>
					Email must be Valid
				</h6>
				<h6 className={validation() ? "text-success" : "text-warning"}>
					New Email fields should match
				</h6>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">New Email</label>
					</div>
					<input
						type="email"
						className={`form-control ${
							validation() ? `border-success` : `border-warning`
							}`}
						placeholder="New Email"
						value={newEm1}
						onChange={handleChange("newEm1")}
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Retype New Email</label>
					</div>
					<input
						type="email"
						className={`form-control ${
							validation() ? `border-success` : `border-warning`
							}`}
						placeholder="Retype New Email"
						value={newEm2}
						onChange={handleChange("newEm2")}
					/>
				</div>
				<h6 className="text-info">
					Enter your current email to authorize this update
				</h6>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Email</label>
					</div>
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						value={oldEm}
						onChange={handleChange("oldEm")}
						disabled={newEm1 !== newEm2 || !newEm1 || !newEm2}
					/>
				</div>
				<button
					className="btn btn-info rounded"
					disabled={newEm1 !== newEm2 || !newEm1 || !newEm2 || !oldEm}
					onClick={formSubmit}
				>
					Update Email
				</button>
			</form>
		);
	};

	return (
		<Base
			title="Email Reset"
			description=""
			className="container bg-white p-4 rounded"
		>
			<Link className="btn btn-info rounded mb-4" to="/user/dashboard">
				Your Dashboard
			</Link>
			{resetEmailForm()}
			{loadingMessage()}
			{errorMessage()}
			{successMessage()}
		</Base>
	);
};

export default EmailReset;