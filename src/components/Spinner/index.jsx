import React from 'react';
import Loading from 'react-loader-spinner';
const Loader = () => {
	return (
		<div>
			<div>
				<Loading
					type="Puff"
					color="#00BFFF"
					height={100}
					width={100}
					timeout={3000} //3 secs
				/>
			</div>
		</div>
	);
};

export default Loader;
