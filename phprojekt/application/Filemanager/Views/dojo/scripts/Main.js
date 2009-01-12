/**
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License version 2.1 as published by the Free Software Foundation
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * @copyright  Copyright (c) 2009 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL 2.1 (See LICENSE file)
 * @version    $Id:$
 * @author     Mariano La Penna <mariano.lapenna@mayflower.de>
 * @package    PHProjekt
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 */

dojo.provide("phpr.Filemanager.Main");

dojo.declare("phpr.Filemanager.Main", phpr.Default.Main, {
    constructor:function() {
        this.module = "Filemanager";
        this.loadFunctions(this.module);

        this.gridWidget = phpr.Filemanager.Grid;
        this.formWidget = phpr.Filemanager.Form;
        this.treeWidget = phpr.Filemanager.Tree;
    }
});