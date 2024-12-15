import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [list, setList] = useState([]);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');

		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		let id = Date.now();
		const updatedList = [...list, { id, value }];

		if (value) {
			setList(updatedList);

			setValue('');
			setError('');
		}
	};

	const isValueVaild = value < 3 ? false : true;

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			<div className={styles.error}>{error}</div>
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length > 0 ? null : (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li key={id}>{value}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
