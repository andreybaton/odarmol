import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzTreeSelectModule } from "ng-zorro-antd/tree-select";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    selector: 'risk-category',
    templateUrl: './risk-category.component.html',
    styleUrls: ['./risk-category.component.scss'],
	imports: [ CommonModule, ReactiveFormsModule,
			   NzInputModule, NzCardModule, NzFormModule, NzTreeSelectModule, NzRadioModule],
    standalone: true,
})

export class  RiskCategoryComponent implements OnInit {
	riskForm: FormGroup; 
	constructor(
		private fb: FormBuilder
	) {
		this.riskForm = this.fb.group({
			buildingTypeIds: [null as string | null], // Функциональное назначение
			fireResitanse: [null],
			possibleRO: [null],
			explosionResistance: [null],
			explosionResistanceNU: [null],
			hasFireProtection: [null],
			hasPeopleInTheResidentialArea: [null],
			hasRoundTheClockStayOfMMG10InWorkingHours: [null],
			hasRegularWorkplaces: [null],
			hasMMGOnTerritory: [null],
			hasRoundTheClockStayOfMMG: [null],
			stairHasMultiLightSpaces: null,
			protection: null,
			aroundTheClockProtection: null,
			aroundTheClockPeopleAvailability: null,	
		});
	}

	ngOnInit(): void {
		this.riskForm.valueChanges.subscribe((value)=>console.log(value))
	}

	binaryFields = [
		{
			controlName: 'hasFireProtection',
			label: 'Наличие на объекте пожарной охраны, обеспеченной пожарно-техническим вооружением'
		},
		{
			controlName: 'hasPeopleInTheResidentialArea',
			label: 'Наличие людей в селитебной зоне'
		},
		{
			controlName: 'hasRoundTheClockStayOfMMG10InWorkingHours',
			label: `Нахождение в рабочее время 
			на объекте более 10 человек отнесенных к категории маломобильных групп населения, детей 
			дошкольного и школьного возраста, а также пожилых людей старше 65 лет`
		},
		{
			controlName: 'hasRegularWorkplaces',
			label: 'Наличие постоянных рабочих мест'
		},
		{
			controlName: 'hasMMGOnTerritory',
			label: ` Наличие маломобильных групп населения, пожилых людей старше 65 лет
			на территории (для производственных объектов и наружных установок)`
		},
		{
			controlName: 'hasRoundTheClockStayOfMMG',
			label: `Наличие круглосуточного пребывания или проживания 
			маломобильных групп населения, детей дошкольного и школьного возраста, пожилых людей старше 65 лет`
		},
		{
			controlName: 'stairHasMultiLightSpaces',
			label: ` Наличие открытых лестниц и (или) многосветных пространств`
		},
		{
			controlName: 'protection',
			label: ` Наличие привлеченной к охране организации специально учрежденной для оказания охранных услуг`
		},
		{
			controlName: 'aroundTheClockProtection',
			label: ' Круглосуточный режим работы охранной организации'
		},
		{
			controlName: 'aroundTheClockPeopleAvailability',
			label: ' Наличие на объекте круглосуточного пребывания людей'
		}
	]

	fireResitanse = {
		1:'I',
		2:'II',
		3:'III',
		4:'IV',
		5:'V',
	}

	explosionResistance = {
		A: 'A',
		B: 'Б',
		V: 'В',
		G: 'Г',
		D: 'Д'
	}

	explosionResistanceNU = {
		A: 'AН',
		B: 'БН',
		V: 'ВН',
		G: 'ГН',
		D: 'ДН'
	}
}