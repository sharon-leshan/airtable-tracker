import Airtable from 'airtable';
import './App.css';
import { useEffect, useState } from 'react';
import Row from './components/Row';
import Cell from './components/Cell';
import After from './components/After';
import CellCategory from './components/CellCategory';
import Checkbox from './components/Checkbox';
import { airtable } from './airtable';
import User from './components/User';
import { Checkbox as CheckboxIcon, IconButton } from '@material-ui/core';
import {
	ArrowDropDown,
	FormatAlignLeft,
	FormatColorText,
	FormatIndentIncrease,
	FormatListNumbered,
	Group,
	InsertDriveFile,
	Person,
	Today,
} from '@material-ui/icons';
import Modal from './components/Modal';

import moment from 'moment';
const base = new Airtable({ apiKey: airtable.apiKey }).base(airtable.baseId);

function App() {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [clients, setClients] = useState([]);
	const [team, setTeam] = useState([]);
	const [selectedImage, setSelectedImage] = useState({});
	const [openModal, setOpenModal] = useState(false);
	const colors = {
		blue: '#00bcd4',
		green: '#4caf50',
		red: '#f44336',
		yellow: '#ffeb3b',
		purple: '#9c27b0',
		orange: '#ff9800',
	};

	useEffect(() => {
		base('Design projects')
			.select()
			.eachPage((records, fetchNextPage) => {
				setProjects(records);
				console.log(records);
				fetchNextPage();
			});
		base('Tasks')
			.select()
			.eachPage((records, fetchNextPage) => {
				setTasks(records);
				console.log(records);
				fetchNextPage();
			});
		base('Clients')
			.select()
			.eachPage((records, fetchNextPage) => {
				setClients(records);
				console.log(records);
				fetchNextPage();
			});
	}, []);

	return (
		<div className="project-tracker">
			<table cellSpacing="1" cellpadding="1">
				<thead>
					<tr className="fixed-header">
						<th></th>
						<th className="fixed-column">
							<IconButton disabled>
								<FormatColorText />
							</IconButton>
							Name
						</th>
						<th className="">
							<IconButton disabled>
								<ArrowDropDown />
							</IconButton>
							Category
						</th>
						<th>
							<CheckboxIcon checked disabled />
							Complete
						</th>
						<th>
							<IconButton disabled>
								<InsertDriveFile />
							</IconButton>
							Project images
						</th>
						<th>
							<IconButton disabled>
								<FormatAlignLeft />
							</IconButton>
							Client
						</th>
						<th>
							<IconButton disabled>
								<Person />
							</IconButton>
							Project lead
						</th>
						<th>
							<IconButton disabled>
								<Group />
							</IconButton>
							Project team
						</th>
						<th>
							<IconButton disabled>
								<Today />
							</IconButton>
							Kickoff date
						</th>
						<th>
							<IconButton disabled>
								<Today />
							</IconButton>
							Due date
						</th>
						<th>
							<IconButton disabled>
								<FormatListNumbered />
							</IconButton>
							Notes
						</th>
						<th>
							<IconButton disabled>
								<FormatIndentIncrease />
							</IconButton>
							Tasks
						</th>
					</tr>
				</thead>
				<tbody>
					{projects &&
						projects
							.sort((a, b) => {
								if (a.fields.Category < b.fields.Category) return -1;
								if (a.fields.Category > b.fields.Category) return 1;
								return 0;
							})
							.map((project, index) => (
								<Row key={project.id}>
									<Cell style={{ width: '15px' }}>
										{index + 1}
										<After
											bgColor={
												project.fields.Category === 'Brand identity'
													? colors.blue
													: project.fields.Category === 'Industrial design'
													? colors.red
													: project.fields.Category === 'Healthcare design'
													? colors.orange
													: project.fields.Category === 'Technology design'
													? colors.green
													: ''
											}
										/>
									</Cell>
									<Cell>{project.fields.Name}</Cell>
									<Cell>
										<CellCategory
											bgColor={
												project.fields.Category === 'Brand identity'
													? colors.blue
													: project.fields.Category === 'Industrial design'
													? colors.red
													: project.fields.Category === 'Healthcare design'
													? colors.orange
													: project.fields.Category === 'Technology design'
													? colors.green
													: ''
											}
										>
											{project.fields.Category}
										</CellCategory>
									</Cell>
									<Cell>
										<div className="flex-center">
											<Checkbox index={index} value={project.fields.Complete} />
										</div>
									</Cell>
									<Cell>
										<div className="image-wrapper">
											{project.fields['Project images']?.map(image => (
												<div
													className="image"
													key={image.id}
													onClick={() => {
														setSelectedImage(image);
														setOpenModal(true);
													}}
												>
													<img
														src={image.thumbnails?.large.url}
														alt={`${image.thumbnails?.large?.filename}`}
													/>
												</div>
											))}
										</div>
									</Cell>
									<Cell>{}</Cell>
									<Cell>
										<User username={project.fields['Project lead'].name} />
									</Cell>
									<Cell>
										<div>
											{project.fields['Project team']?.map(team => (
												<User key={team.id} username={team.name} />
											))}
										</div>
									</Cell>
									<Cell>
										{moment(project.fields['Kickoff date']).format('M/D/YYYY')}
									</Cell>
									<Cell>
										{moment(project.fields['Due date']).format('M/D/YYYY')}
									</Cell>
									<Cell>
										<div className="ellipsis">{project.fields.Notes}</div>
									</Cell>
									<Cell>{project.fields.Tasks}</Cell>
								</Row>
							))}
				</tbody>
			</table>
			<Modal
				open={openModal}
				image={selectedImage}
				onClose={() => setOpenModal(false)}
			/>
		</div>
	);
}

export default App;
