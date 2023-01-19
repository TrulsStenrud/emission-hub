import React, {useEffect, useRef} from "react";
import {emissionData} from "../resources/ToLazyToDoFileLoad";
import {LAST_INDEX_WITH_OK_DATA, VALUES_START_INDEX} from "../resources/csvUtils";
import {CompInfoType} from "../App";
import {FormControl, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent} from "@mui/material";


type CompanyDropProps = {
    setEmissionDataIndex: React.Dispatch<React.SetStateAction<CompInfoType>>;
};

export default function CompanyDropDown({setEmissionDataIndex}: CompanyDropProps) {
    const companies = useRef<string[]>(
        emissionData
            .split("\n")
            .slice(VALUES_START_INDEX, LAST_INDEX_WITH_OK_DATA)
            .map(line => line.split(",")[0])
    ).current;

    useEffect(() => {
            if (companies.length == 0) {
                return
            }
            const firstComp = companies[0]
            setEmissionDataIndex({name: firstComp, csvIndex: VALUES_START_INDEX})
        }, []
    )

    const onChange = (v: any) => {
        const i = +v.target.value
        const csvIndex = i + VALUES_START_INDEX
        const name = companies[i]

        setEmissionDataIndex({csvIndex, name})
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Company</InputLabel>
            <NativeSelect
                defaultValue={0}
                variant="filled"
                onChange={onChange}>
                {companies.map((company, key) =>
                    <CompInfoOption key={key} value={key} name={company}/>
                )}
            </NativeSelect>
        </FormControl>
    );
}

type DropDownProps = {
    value: number;
    name: string;
};

const CompInfoOption = (props: DropDownProps) => {
    return (
        <option value={props.value}>{props.name}</option>
    );
};