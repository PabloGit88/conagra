<?php

use Odiseo\Bundle\ProjectBundle\Kernel\Kernel;

class AppKernel extends Kernel
{
	public function registerBundles()
	{
		$bundles = array(
            new Odiseo\Bundle\BackendBundle\OdiseoBackendBundle(),
			new JavierEguiluz\Bundle\EasyAdminBundle\EasyAdminBundle(),
            new Odiseo\Bundle\ConAgraBundle\OdiseoConAgraBundle(),
			new Lunetics\LocaleBundle\LuneticsLocaleBundle(),
			new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle()
		);
		
		if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }
		
		return array_merge(parent::registerBundles(), $bundles);
	}
}
