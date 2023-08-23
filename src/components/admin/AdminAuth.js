import React, { useContext, useEffect, useState } from "react";
import { registerAuth, signInUser } from "../../api/auth";
import { AppContext } from "../../store/AppContext";
import { setAuthHeaderInstance } from "../../api/instance";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigation = useNavigate();
  const [showSignIn, setShowSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const { setAuthToken, openAdminPanel, setOpenAdminPanel } =
    useContext(AppContext);

  useEffect(() => {
    setError("");
  }, [password, email, showSignIn]);

  const closeModal = () => {
    setOpenAdminPanel(false);
    setEmail("");
    setPassword("");
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      if (!showSignIn) {
        const { data, status } = await registerAuth({ email, password });

        if (!data || status !== 201) {
          return;
        }
      }

      const { data, status } = await signInUser({ email, password });

      if (status === 200 && typeof data?.token === "string") {
        setAuthToken(data.token);
        setAuthHeaderInstance(data.token);
        navigation("/admin");
        closeModal();
      }
    } catch (e) {
      console.log("error login user", e.message);
      setError(typeof e?.message === "string" ? e.message : "error login user");
      return;
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {openAdminPanel && (
        <>
          <div
            className={`modal show`}
            tabIndex="-1"
            role="dialog"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="modal-dialog w-100">
              <div className="modal-content p-2">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {showSignIn ? "Sign In" : "Register"}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={closeModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                      <label className="mb-1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                      />
                      {error && (
                        <p className="text-danger">
                          <u>{error}</u>
                        </p>
                      )}
                    </div>
                    <div className="form-group mb-2">
                      <label className="mb-1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="•••••••"
                        required
                      />
                      {error && (
                        <p className="text-danger">
                          <u>{error}</u>
                        </p>
                      )}
                    </div>
                    <button type="submit" className="btn btn-dark mt-2 w-50">
                      {loader ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : showSignIn ? (
                        "Sign In"
                      ) : (
                        "Register"
                      )}
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <p>
                    {showSignIn
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    <button className="btn btn-link p-2" onClick={toggleSignIn}>
                      {showSignIn ? "Register" : "Sign In"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`modal-backdrop show`} onClick={closeModal}></div>
        </>
      )}
    </>
  );
};
