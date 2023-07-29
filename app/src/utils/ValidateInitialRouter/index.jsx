import React from 'react';

function ValidateInitialRouter(){
	function Init() {
	  let token = localStorage.getItem('token');
		if(token !== '' && token !== null){
			window.location.href = '/userProfile';
		}
		else {
		   window.location.href = "/login?type=user";
		}
	}

	React.useEffect(() => {
	    Init();
	},[]);

	return (
		<span></span>
	);
}

export default ValidateInitialRouter;
