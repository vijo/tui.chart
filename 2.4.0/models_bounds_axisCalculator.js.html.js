tui.util.defineNamespace("fedoc.content", {});
fedoc.content["models_bounds_axisCalculator.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Calculator for dimension of axis.\n * @author NHN Ent.\n *         FE Development Lab &lt;dl_javascript@nhnent.com>\n */\n\n'use strict';\n\nvar chartConst = require('../../const');\nvar predicate = require('../../helpers/predicate');\nvar renderUtil = require('../../helpers/renderUtil');\n\n/**\n * Calculator for dimension of axis.\n * @module axisCalculator\n */\nvar axisCalculator = {\n    /**\n     * Calculate height for x axis.\n     * @param {string} title - title for x axis\n     * @param {{title: object, label: object}} theme - theme for x axis\n     * @returns {*}\n     */\n    calculateXAxisHeight: function(title, theme) {\n        var titleHeight = renderUtil.getRenderedLabelHeight(title, theme.title);\n        var titleAreaHeight = titleHeight ? (titleHeight + chartConst.TITLE_PADDING) : 0;\n        var labelHeight = renderUtil.getRenderedLabelHeight(chartConst.MAX_HEIGHT_WORLD, theme.label);\n\n        return titleAreaHeight + labelHeight + chartConst.CHART_PADDING;\n    },\n\n    /**\n     * Calculate width for y axis.\n     * @param {Array.&lt;string | number>} labels labels\n     * @param {{title: ?string, isCenter: ?boolean, rotateTitle: ?boolean}} options - options\n     * @param {{title: object, label: object}} theme - them for y axis\n     * @returns {number}\n     * @private\n     */\n    calculateYAxisWidth: function(labels, options, theme) {\n        var title = options.title || '';\n        var titleAreaWidth = 0;\n        var width = 0;\n\n        if (options.isCenter) {\n            width += chartConst.AXIS_LABEL_PADDING;\n        } else if (options.rotateTitle === false) {\n            titleAreaWidth = renderUtil.getRenderedLabelWidth(title, theme.title) + chartConst.TITLE_PADDING;\n        } else {\n            titleAreaWidth = renderUtil.getRenderedLabelHeight(title, theme.title) + chartConst.TITLE_PADDING;\n        }\n\n        if (predicate.isDatetimeType(options.type)) {\n            labels = renderUtil.formatDates(labels, options.dateFormat);\n        }\n\n        width += renderUtil.getRenderedLabelsMaxWidth(labels, theme.label) + titleAreaWidth +\n            chartConst.AXIS_LABEL_PADDING;\n\n        return width;\n    }\n};\n\nmodule.exports = axisCalculator;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"