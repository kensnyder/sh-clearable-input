import React from 'react';
import './ClearableInputComponent.css';

export function ClearableInput({
	value,
	size = 20,
	disabled = false,
	isSearch = false,
	onChange = () => {},
	onEnter = () => {},
	onClear = () => {},
	children,
	...inputAttr
}) {
	return (
		<div className="Component ClearableInput">
			<input
				type="text"
				className="form-input"
				value={value}
				onChange={onChange}
				onKeyUp={keyup}
				size={size}
				disabled={disabled}
				{...inputAttr}
			/>
			{value && !disabled && (
				<i className="fas fa-times-circle" onClick={clear} />
			)}
			{!value && isSearch && <i className="fas fa-search" />}
		</div>
	);

	function keyup(evt) {
		if (evt.which === 13) {
			onEnter(evt);
		}
	}

	function clear() {
		onChange({ target: { value: '' } });
		onClear();
	}
}
/*
<div class="wrapper">
	<input ng-model="vm.model"
		   type="text"
		   placeholder="{{vm.placeholder}}"
		   size="{{vm.size || '20'}}"
		   ng-model-options="vm.modelOptions || {}"
		   ng-keyup="vm.keyup($event)"
		   ng-disabled="vm.disabled"
		   class="form-input"
	>
	<span ng-if="vm.model && !vm.disabled" class="icons icon-cancel-circle" ng-click="vm.clear()"></span>
	<span ng-if="vm.isSearch && !vm.model" class="icons icon-magnifier"></span>
</div>

			model: '=',
			modelOptions: '<?',
			onEnter: '&?',
			onClear: '&?',
			placeholder: '@',
			isSearch: '<?',
			size: '<?',
			disabled: '<?',

/*

	keyup(evt) {
		if (evt.which == 13) {
			this.onEnter && this.onEnter();
		}
	}

	clear() {
		this.model = '';
		this.onClear && this.onClear();
	}

*/
