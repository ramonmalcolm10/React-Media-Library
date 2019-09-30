import React, {ReactNode} from "react";
import {FileUploadListProps} from "../../types";
import {FileUploadListItem} from "../../types/components/FileUpload";
import Badge from "react-bootstrap/Badge";

function renderBadge(status: number): ReactNode {
	switch (status) {
		case -1:
			return (<Badge variant="danger">Failed</Badge>);
		case 0:
			return (<Badge variant="secondary">Processing</Badge>);
		case 1:
			return (<Badge variant="success">Success</Badge>);
	}
	return;
}

const FileUploadList: React.FC<FileUploadListProps> = (props: FileUploadListProps): JSX.Element => {
	function renderList(): ReactNode[] {
		const render: ReactNode[] = [];
		props.fileUploadList.forEach((element: FileUploadListItem, index: number) => {
			render.push(<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
				{element.name}
				{renderBadge(element.status)}
			</li>);
		});
		return render;
	}

	return (
		<React.Fragment>
			{props.fileUploadList.length ? (<h3>Files</h3>) : ""}
			<ul className="list-groups p-0">
				{renderList()}
			</ul>
		</React.Fragment>
	);
};

export default FileUploadList;