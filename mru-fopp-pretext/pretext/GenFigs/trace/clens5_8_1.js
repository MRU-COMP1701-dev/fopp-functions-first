if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens5_8_1"] = {"code": "x = 10\ny = 10\n\nif x < y:\n    print(\"x is less than y\")\nelse:\n    if x > y:\n        print(\"x is greater than y\")\n    else:\n        print(\"x and y must be equal\")\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"x": 10}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"x": 10, "y": 10}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"x": 10, "y": 10}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 10, "event": "step_line", "func_name": "<module>", "globals": {"x": 10, "y": 10}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 10, "event": "return", "func_name": "<module>", "globals": {"x": 10, "y": 10}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": "x and y must be equal\n"}]}