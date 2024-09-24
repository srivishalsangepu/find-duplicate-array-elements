function check_duplicate_in_array(input_array) {
    input_array = input_array.sort((a, b) => a - b);
    return input_array.reduce(
        (duplicated_elements, current_element, current_index) => {
            if (input_array[current_index] ===
                input_array[current_index - 1]) {
                duplicated_elements.push(current_element);
            }
            return Array.from(new Set(duplicated_elements));
        },
        []
    );
};
module.exports = {check_duplicate_in_array};
