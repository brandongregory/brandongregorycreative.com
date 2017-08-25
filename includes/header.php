<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brandon Gregory | <?=$pageTitle?></title>
<link rel="stylesheet" href="css/master.css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body class="<?=$pageClass?>">
    <nav class="navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Brandon Gregory <span class="hidden-xs hidden-sm">Creative</span></a>
            </div><!-- / .navbar-header -->
            <div class="navbar-collapse" id="main-nav">
                <ul class="nav navbar-nav navbar-right">
                    <li<?php if ($page == 'home') { ?> class="active"<?php } ?>><a href="index.php"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                    <li<?php if ($page == 'writing') { ?> class="active"<?php } ?>><a href="writing.php"><i class="fa fa-pencil" aria-hidden="true"></i> Writing</a></li>
                    <li<?php if ($page == 'web') { ?> class="active"<?php } ?>><a href="web.php"><i class="fa fa-cog" aria-hidden="true"></i> Web</a></li>
                    <li<?php if ($page == 'about') { ?> class="active"<?php } ?>><a href="about.php"><i class="fa fa-user" aria-hidden="true"></i> About</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>